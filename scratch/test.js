const str = '<a href="https://www.up-4ever.net/7j36anh3qb9m" target=_blank>chs16.pdf - 110 KB</a>';
const regex = /href="([^"]+)"[^>]*>chs(\d+(?:-\d+)?[A-Z]?)\.pdf/i;
console.log(str.match(regex));
