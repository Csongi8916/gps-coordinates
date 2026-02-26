using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class CoordinatesController : ControllerBase
{
  private readonly ICoordinateService _service;

  public CoordinatesController(ICoordinateService service)
  {
    _service = service;
  }

  // GET: api/coordinates
  [HttpGet]
  public async Task<ActionResult<IEnumerable<CoordinateDto>>> GetAll()
  {
    var result = await _service.GetAllAsync();
    return Ok(result);
  }

  // GET: api/coordinates/5
  [HttpGet("{id:int}")]
  public async Task<ActionResult<CoordinateDto>> GetById(int id)
  {
    var result = await _service.GetByIdAsync(id);

    if (result == null)
      return NotFound();

    return Ok(result);
  }

  // POST: api/coordinates
  [HttpPost]
  public async Task<ActionResult<CoordinateDto>> Create(CreateCoordinateDto dto)
  {
    var created = await _service.CreateAsync(dto);

    return CreatedAtAction(
        nameof(GetById),
        new { id = created.Id },
        created);
  }

  // PUT: api/coordinates/5
  [HttpPut("{id:int}")]
  public async Task<IActionResult> Update(int id, UpdateCoordinateDto dto)
  {
    var success = await _service.UpdateAsync(id, dto);

    if (!success)
      return NotFound();

    return NoContent();
  }

  // DELETE: api/coordinates/5
  [HttpDelete("{id:int}")]
  public async Task<IActionResult> Delete(int id)
  {
    var success = await _service.DeleteAsync(id);

    if (!success)
      return NotFound();

    return NoContent();
  }
}
