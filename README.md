# azure-functions-resize-proxy

A simple Azure Function to resize images given an external URL.

## How to use

This repository was generated with Azure Functions Core Tools.

To deploy it to Azure, you can use the button below or clone the repository and publish using Azure Functions Core Tools from vscode or CLI.

[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

After publishing, use the `resize` function from endpoint, i.e.:

```
https://yourfunctionname.azurewebsites.net/api/resize?url=IMAGEURL&h=120
```

## URL parameters

`YOURFUNCTIONENDPOINT?url=IMAGEURL&h=RESIZEHEIGHT[&cache=SECONDSTOCACHE]`

### `url` _required_

The image URL that you want to resize.

### `h` _required_

The height of resized image.

> For now, this function only supports proportinal resizing. Passing the height parameter will calculate automatically the new image witdh.

### `cache` _optional_

A time in seconds to respond with `Cache-Control` header.

Example: `&cache=7200` will force HTTP Response to include header `Cache-Control: max-age=7200` (2 hours).

## About

Built with [Jimp](https://github.com/oliver-moran/jimp) and [Azure Functions Middlewares](https://github.com/NOALVO/azure-functions-middlewares) ❤.

Licensed under [MIT License](https://github.com/NOALVO/azure-functions-resize-proxy/blob/master/LICENSE.md).