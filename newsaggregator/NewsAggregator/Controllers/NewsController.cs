using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

public class NewsController : Controller
{
    private readonly NewsService _newsService;

    public NewsController()
    {
        _newsService = new NewsService();
    }

    public IActionResult Index()
    {
        var sources = _newsService.GetNewsSources();
        return View(sources);
    }

    [HttpPost]
    public IActionResult AddSource(string name, string apiUrl)
    {
        _newsService.GetNewsSources().Add(new NewsSource { Name = name, ApiUrl = apiUrl });
        return RedirectToAction("Index");
    }

    public async Task<IActionResult> FetchNews(string apiUrl)
    {
        var news = await _newsService.FetchNewsAsync(apiUrl);
        return Content(news, "application/json");
    }
}