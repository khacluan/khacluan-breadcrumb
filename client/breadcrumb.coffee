crumbs = []

Breadcrumb =
  addCrumb: (title, path) ->
    crumbs.push({title: title, path: path})

  getCrumbs: ->
    return crumbs