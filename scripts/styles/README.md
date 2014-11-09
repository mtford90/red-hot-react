Loaders for styles.

Vendor & Custom styles are kept seperate, because webpack performs hot ***module*** replacement.

If there were in the same file, webpack would build bootstrap every single time we make a change.

The advantage of this approach is speed. The disadvantage is that if we need to include elements of bootstrap within our main scss (e.g. variables), then we have duplication.