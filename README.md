| HTTP Method | Endpoint | CRUD Operation | Route Name | Description|
|--|--|--|--|--|
| Get | /recipes | Read | index | Display list of recipes |
| Get | /recipes/:new | None | New | Show form to fill out new recipe card |
| POST | /recipes | Create | create | Add a new recipe to recipe book |
| Get | /recipes/:recipesID | Read | show | Display a specific recipe |
| Get | /recipes/:recipeID/edit | Read | edit | Show a form to edit existing recipe |
| Put | /recipes/:recipeID | Update | update | Update a specific recipe |
| DELETE | /recipes/:recipeID | Delete | delete | Remove a specific recipe from the list |