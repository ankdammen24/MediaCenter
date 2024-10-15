using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

public class NewsService
{
    private readonly List<NewsSource> _newsSources;

    public NewsService()
    {
        _newsSources = new List<NewsSource>
        {
            new NewsSource { Name = "TT", ApiUrl = "https://api.tt.se/news" },
            new NewsSource { Name = "SVT", ApiUrl = "https://api.svt.se/news" }
        };
    }

    public List<NewsSource> GetNewsSources() => _newsSources;

    public async Task<string> FetchNewsAsync(string apiUrl)
    {
        using (var client = new HttpClient())
        {
            var response = await client.GetStringAsync(apiUrl);
            return response;
        }
    }
}