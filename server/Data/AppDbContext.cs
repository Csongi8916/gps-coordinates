using Microsoft.EntityFrameworkCore;
using GpsCoordinatesApi.Models;

namespace GpsCoordinatesApi.Data;

public class AppDbContext : DbContext
{
  public AppDbContext(DbContextOptions<AppDbContext> options)
      : base(options)
  {
  }

  public DbSet<Coordinate> Coordinates => Set<Coordinate>();

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);

    modelBuilder.Entity<Coordinate>().HasData(
        new Coordinate
        {
          Id = 1,
          Latitude = 47.4979,
          Longitude = 19.0402,
          OrderIndex = 1,
          Name = "Start Budapest"
        },
        new Coordinate
        {
          Id = 2,
          Latitude = 47.4985,
          Longitude = 19.0420,
          OrderIndex = 2,
          Name = "Point 2"
        },
        new Coordinate
        {
          Id = 3,
          Latitude = 47.5000,
          Longitude = 19.0450,
          OrderIndex = 3,
          Name = "Point 3"
        },
        new Coordinate
        {
          Id = 4,
          Latitude = 47.5010,
          Longitude = 19.0480,
          OrderIndex = 4,
          Name = "Point 4"
        },
        new Coordinate
        {
          Id = 5,
          Latitude = 47.5020,
          Longitude = 19.0500,
          OrderIndex = 5,
          Name = "Point 5"
        }
    );
  }
}
