using Microsoft.EntityFrameworkCore;
using GpsCoordinatesApi.Data;
using GpsCoordinatesApi.Models;

public class CoordinateService : ICoordinateService
{
  private readonly AppDbContext _context;

  public CoordinateService(AppDbContext context)
  {
    _context = context;
  }

  public async Task<IEnumerable<CoordinateDto>> GetAllAsync()
  {
    return await _context.Coordinates
        .OrderBy(c => c.OrderIndex)
        .Select(c => MapToDto(c))
        .ToListAsync();
  }

  public async Task<CoordinateDto?> GetByIdAsync(int id)
  {
    return await _context.Coordinates
        .Where(c => c.Id == id)
        .Select(c => MapToDto(c))
        .FirstOrDefaultAsync();
  }

  public async Task<CoordinateDto> CreateAsync(CreateCoordinateDto dto)
  {
    var entity = new Coordinate
    {
      Latitude = dto.Latitude,
      Longitude = dto.Longitude,
      OrderIndex = dto.OrderIndex,
      Name = dto.Name,
      Description = dto.Description
    };

    _context.Coordinates.Add(entity);
    await _context.SaveChangesAsync();

    return MapToDto(entity);
  }

  public async Task<bool> UpdateAsync(int id, UpdateCoordinateDto dto)
  {
    var entity = await _context.Coordinates.FindAsync(id);

    if (entity == null)
      return false;

    entity.Latitude = dto.Latitude;
    entity.Longitude = dto.Longitude;
    entity.OrderIndex = dto.OrderIndex;
    entity.Name = dto.Name;
    entity.Description = dto.Description;

    await _context.SaveChangesAsync();
    return true;
  }

  public async Task<bool> DeleteAsync(int id)
  {
    var entity = await _context.Coordinates.FindAsync(id);

    if (entity == null)
      return false;

    _context.Coordinates.Remove(entity);
    await _context.SaveChangesAsync();
    return true;
  }

  private static CoordinateDto MapToDto(Coordinate entity)
  {
    return new CoordinateDto
    {
      Id = entity.Id,
      Latitude = entity.Latitude,
      Longitude = entity.Longitude,
      OrderIndex = entity.OrderIndex,
      Name = entity.Name,
      Description = entity.Description
    };
  }
}