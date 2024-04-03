# Steps to upload and host on S3

1. Create a bucket on S3
2. Upload the files to the bucket
3. Make the files public
4. Set start as index.html and error as 404.tsx
5. Access the website using the endpoint

# Steps on next.js side
1. Create 404.tsx 
2. Copy logic from this repo
3. set output: "export"
4. Run `npm run build`
5. Upload ./out to S3