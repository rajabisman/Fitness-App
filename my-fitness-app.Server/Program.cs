using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.EntityFrameworkCore;
using my_fitness_app.Server.Data;

var builder = WebApplication.CreateBuilder(args);

// Add controllers
builder.Services.AddControllers();

//  Configure CORS (must match your Vite dev URL and allow credentials)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowViteClient",
        policy => policy
            .WithOrigins("https://localhost:49766") // Must match Vite's HTTPS origin
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
});

//  EF Core + SQL Server
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

//  Cookie Authentication with CORS-safe settings
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie(options =>
    {
        options.LoginPath = "/api/auth/login";
        options.Cookie.SameSite = SameSiteMode.None;              //  Required for cross-origin
        options.Cookie.SecurePolicy = CookieSecurePolicy.Always; //  Required for HTTPS
    });

builder.Services.AddAuthorization();

//  Swagger (Optional for API testing)
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

//  HTTPS redirection
app.UseHttpsRedirection();

//  Order is important: CORS BEFORE Auth
app.UseCors("AllowViteClient");

//  Auth middleware
app.UseAuthentication();
app.UseAuthorization();

//  Swagger in Dev
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//  Route API controllers
app.MapControllers();

//  Start app
app.Run();
