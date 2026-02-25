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
}