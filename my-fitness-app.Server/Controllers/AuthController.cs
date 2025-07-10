using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using my_fitness_app.Server.Data;
using my_fitness_app.Server.Models;
using System.Security.Claims;

namespace my_fitness_app.Server.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class AuthController : ControllerBase
	{
		private readonly ApplicationDbContext _context;
		public AuthController(ApplicationDbContext context)
		{
			_context = context;
		}

		// POST: api/auth/register
		[HttpPost("register")]
		public async Task<IActionResult> Register([FromBody] User newUser)
		{
			if (await _context.Users.AnyAsync(u => u.Email == newUser.Email))
			{
				return BadRequest("User with this email already exists.");
			}

			_context.Users.Add(newUser);
			await _context.SaveChangesAsync();
			return Ok("User registered successfully.");
		}

		// POST: api/auth/login
		[HttpPost("login")]
		public async Task<IActionResult> Login([FromBody] User loginData)
		{
			var user = await _context.Users
				.FirstOrDefaultAsync(u => u.Email == loginData.Email && u.Password == loginData.Password);
			if (user == null)
			{
				return Unauthorized("Invalid credentials.");
			}

			// Create claims and sign in (creates authentication cookie):contentReference[oaicite:11]{index=11}
			var claims = new List<Claim>
			{
				new Claim(ClaimTypes.Name, user.Email)
			};
			var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
			await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme,
										  new ClaimsPrincipal(claimsIdentity));

			return Ok("Login successful.");
		}
	}
}
