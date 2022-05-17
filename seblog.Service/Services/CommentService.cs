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
    private readonly AppDbContext _appDbContext;
    public CommentService(AppDbContext context)
    {
        _appDbContext = context;
    }
    public async Task AddAsync(Comment comment)
    {
        _appDbContext.Comments.Add(comment);
        await _appDbContext.SaveChangesAsync();
    }

    public async Task DeleteAsync(int id)
    {
        var comment = await _appDbContext.Comments.FindAsync(id);
       if (comment is not null) _appDbContext.Comments.Remove(comment);
        await _appDbContext.SaveChangesAsync();
    }

    public async Task<IEnumerable<Comment>> GetAllAsync()
    {
        return await _appDbContext.Comments.ToListAsync();
    }

    public async Task<Comment> GetByIdAsync(int id)
    {
        var comment = await _appDbContext.Comments.FirstOrDefaultAsync(c => c.Id == id);
        return comment;
    }

    public async Task UpdateAsync(Comment comment)
    {
        _appDbContext.Comments.Update(comment);
        await _appDbContext.SaveChangesAsync();
    }
}
