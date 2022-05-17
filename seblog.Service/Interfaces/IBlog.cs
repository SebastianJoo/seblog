using seblog.Data.Models;

namespace seblog.Service.Interfaces;

public interface IBlog
{
    Task<Blog> GetByIdAsync(int id);
    Task<IEnumerable<Blog>> GetAllAsync();
    Task DeleteAsync(int id);
    Task UpdateAsync(int id, Blog blog);
    Task PostBlogAsync(Blog blog);
}
