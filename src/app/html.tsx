export const html = ({ body }: { body: string }) => `
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="app">${body}</div>
  </body>
  <script src="client.js" defer></script>
</html>
`;