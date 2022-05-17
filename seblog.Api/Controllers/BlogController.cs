using Microsoft.AspNetCore.Mvc;
using seblog.Data.Models;
using seblog.Service.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace seblog.Api.Controllers;
[Route("api/[controller]")]
[ApiController]
public class BlogController : ControllerBase
{
    private readonly IBlog _blogService;
    public BlogController(IBlog blogService)
    {
        _blogService = blogService;
    }
    // GET: api/<BlogController>
    [HttpGet]
    public async Task<IEnumerable<Blog>> GetAll()
    {
        return await _blogService.GetAllAsync();
    }
    // GET api/<BlogController>/5
    [HttpGet("{id}")]
    public async Task<Blog> Get(int id)
    {
        return await _blogService.GetByIdAsync(id);
    }
    // POST api/<BlogController>
    [HttpPost]
    public async Task Post(Blog blog)
    {
        blog.CreationDate = DateTime.Now;
        await _blogService.PostBlogAsync(blog);
    }
    // PUT api/<BlogController>/5
    [HttpPut("{id}")]
    public async Task Put(int id, Blog blog)
    {
        await _blogService.UpdateAsync(id, blog);
    }
    // DELETE api/<BlogController>/5
    [HttpDelete("{id}")]
    public async Task Delete(int id)
    {
       await _blogService.DeleteAsync(id);
    }
}
