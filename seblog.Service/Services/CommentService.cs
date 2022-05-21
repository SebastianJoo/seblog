using Microsoft.EntityFrameworkCore;
using seblog.Data;
using seblog.Data.Models;
using seblog.Service.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace seblog.Service.Services;
public class CommentService : IComment
{
    private readonly AppDbContext _context;
    public CommentService(AppDbContext context)
    {
        _context = context;
    }
    public async Task AddCommentAsync(Comment comment)
    {
        _context.Comments.Add(comment);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var comment = await _context.Comments.FindAsync(id);
       if (comment is not null) _context.Comments.Remove(comment);
        await _context.SaveChangesAsync();
    }

    public async Task<IEnumerable<Comment>> GetAllAsync()
    {
        return await _context.Comments.ToListAsync();
    }

    public async Task<Comment> GetByIdAsync(int id)
    {
        var comment = await _context.Comments.FirstOrDefaultAsync(c => c.Id == id);
        return comment;
    }

    public async Task UpdateAsync(Comment comment)
    {
        _context.Comments.Update(comment);
        await _context.SaveChangesAsync();
    }
    public async Task<IEnumerable<Comment>> GetCommentsByBlogPostIdAsync(int blogPostId)
    {
        var comments = await _context.Comments.Where(c => c.Id == blogPostId).ToListAsync();
        return comments; 
    }
}
