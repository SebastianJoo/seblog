using seblog.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace seblog.Service.Interfaces;
public interface IComment
{
    Task<IEnumerable<Comment>> GetAllAsync();
    Task<Comment> GetByIdAsync(int id);
    Task AddCommentAsync(Comment comment);
    Task UpdateAsync(Comment comment);
    Task DeleteAsync(int id);

}
