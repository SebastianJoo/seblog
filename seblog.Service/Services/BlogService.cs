using Microsoft.EntityFrameworkCore;
using seblog.Data;
using seblog.Data.Models;
using seblog.Service.Interfaces;

namespace seblog.Service.Services;

public class BlogService : IBlog
{
    private readonly AppDbContext _context;
    public BlogService(AppDbContext context)
    {
        _context = context;
    }
    public async Task<Blog> GetByIdAsync(int id)
    {
        var blog = await _context.Blogs
                    .FirstOrDefaultAsync(b => b.Id == id);
        return blog;
    }
    public async Task<IEnumerable<Blog>> GetAllAsync()
    {
        return await _context.Blogs
            .Include(b => b.Comments)
            .ToListAsync();
    }
    public async Task DeleteAsync(int id)
    {
        var blog = await _context.Blogs.FirstOrDefaultAsync(blog => blog.Id == id);
        if (blog is not null) _context.Blogs.Remove(blog);
        await _context.SaveChangesAsync();
    }
    public async Task UpdateAsync(int id, Blog blog)
    {
        var blogToEdit = await _context.Blogs.FirstOrDefaultAsync(b => b.Id == id);

        if (blogToEdit is null)
        {
            throw new Exception("No id found");
        }
        else
        {
            _context.Entry(blogToEdit).State = EntityState.Modified;
            blogToEdit.Title = blog.Title;
            blogToEdit.Content = blog.Content;

            await _context.SaveChangesAsync();
        }
    }
    public async Task PostBlogAsync(Blog blog)
    {
        _context.Blogs.Add(blog);
        await _context.SaveChangesAsync();
    }
}
