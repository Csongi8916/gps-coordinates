public interface ICoordinateService
{
  Task<IEnumerable<CoordinateDto>> GetAllAsync();
  Task<CoordinateDto?> GetByIdAsync(int id);
  Task<CoordinateDto> CreateAsync(CreateCoordinateDto dto);
  Task<CoordinateDto?> UpdateAsync(int id, UpdateCoordinateDto dto);
  Task<bool> DeleteAsync(int id);
}