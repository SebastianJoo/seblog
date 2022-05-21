using Microsoft. AspNetCore.Mvc;
using seblog.Data.Models;
using seblog.Service.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace seblog.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {
        private readonly IComment _commentService;

        public CommentsController(IComment commentService)
        {
            _commentService = commentService;
        }
        // GET: api/<CommentsController>
        [HttpGet]
        public async Task<IEnumerable<Comment>> GetAll()
        {
            return await _commentService.GetAllAsync();
        }

        // GET api/<CommentsController>/5
        [HttpGet("{id}")]
        public async Task<Comment> Get(int id)
        {
            return await _commentService.GetByIdAsync(id);
        }

        // POST api/<CommentsController>
        [HttpPost]
        public async Task Post(Comment comment)
        {
            comment.CreationDate = DateTime.Now;
            await _commentService.AddCommentAsync(comment);
        }

        // PUT api/<CommentsController>/5
        [HttpPut("{id}")]
        public async Task Put(Comment comment)
        {
            await _commentService.UpdateAsync(comment);
        }
    
        // DELETE api/<CommentsController>/5
        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            await _commentService.DeleteAsync(id);
        }
    }
}
