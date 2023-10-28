using System.Linq;
using MyApp.ServiceModel;
using ServiceStack;

namespace MyApp.ServiceInterface;

public class TodosServices : Service
{
    public IAutoQueryData AutoQuery { get; set; }

    static readonly PocoDataSource<Todo> Todos = PocoDataSource.Create(new Todo[]
    {
        new () { Id = 1, Text = "Learn" },
        new () { Id = 2, Text = "Blazor Vue", IsFinished = true },
        new () { Id = 3, Text = "ServiceStack" },
    }, nextId: x => x.Select(e => e.Id).Max());

    public object Get(QueryTodos query)
    {
        var db = Todos.ToDataSource(query, Request);
        return AutoQuery.Execute(query, AutoQuery.CreateQuery(query, Request, db), db);
    }

    public Todo Post(CreateTodo request)
    {
        var newTodo = new Todo { Id = Todos.NextId(), Text = request.Text };
        Todos.Add(newTodo);
        return newTodo;
    }

    public Todo Put(UpdateTodo request)
    {
        var todo = request.ConvertTo<Todo>();
        Todos.TryUpdateById(todo, todo.Id);
        return todo;
    }

    public void Delete(DeleteTodos request) => Todos.TryDeleteByIds(request.Ids);
}
