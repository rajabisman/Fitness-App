using Microsoft.EntityFrameworkCore;
using my_fitness_app.Server.Models;
namespace my_fitness_app.Server.Data
{
	public class ApplicationDbContext : DbContext 
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
			: base(options)
		{
		}

		public DbSet<User> Users { get; set; }
	}
}
