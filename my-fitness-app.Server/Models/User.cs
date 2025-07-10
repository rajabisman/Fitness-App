﻿using System.ComponentModel.DataAnnotations;

namespace my_fitness_app.Server.Models
{
	public class User
	{
		public int Id { get; set; }

		[Required]
		public string Email { get; set; }

		[Required]
		public string Password { get; set; }
	}
}
