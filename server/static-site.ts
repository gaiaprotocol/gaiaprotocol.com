export function generateWebPage(options: {
  title: string;
  header: string;
  footer: string;
  body: string;
}): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">
  <title>${options.title}</title>
</head>
<body>
  ${options.header}
  ${options.body}
  ${options.footer}
</body>
</html>`;
}
