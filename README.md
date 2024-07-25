# Gif Grid Splitter App Niccolo Lampa

Takes gif image of any aspect ratio / size and displays in a grid. 



![Screenshot 2024-07-25 at 9 46 40 PM](https://github.com/user-attachments/assets/78ebbd31-6f91-47aa-b365-55a0e2cf0426)

## Running the Gif Grid Splitter App

First let's install the dependencies by running:

```bash
yarn install
#or
npm install

```

Then run the development server:

```bash
yarn dev
# or 
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Download example gif : [https://c.tenor.com/GfSX-u7VGM4AAAAC/tenor.gif](https://c.tenor.com/GfSX-u7VGM4AAAAC/tenor.gif)

Use app. Select gif and input rows and cols 

**Tip: will take a long time to render so use lower rows x cols combination. Start with 2x2.**

Will generate an individual gif image per grid item. 

![test](https://github.com/user-attachments/assets/d7c71826-d7f9-4060-937c-1d5f0d2dec47)


## Demo 

Gif Grid Splitter:


https://github.com/user-attachments/assets/2085c2e2-0ff9-450b-9a4d-5757c25b6b64


Error Handling: 

No image

![Screenshot 2024-07-22 at 3 43 13 PM](https://github.com/user-attachments/assets/c09b5d9b-15cc-4b27-a632-aaf062a7a4f3)

Invalid rows or column values

![Screenshot 2024-07-22 at 3 43 24 PM](https://github.com/user-attachments/assets/95d0c450-7147-4108-8b70-4914470a473e)

![Screenshot 2024-07-22 at 3 44 30 PM](https://github.com/user-attachments/assets/5b96c9f1-755d-4000-b56d-887f8292c68b)

## Dependencies Used

Used Next.js and Tailwind css. 

All features are created without the use of third-party libraries including handling of frames and splitting of frames based on mxn). 

gifuct-js - to extract the original gif frames and delay/timing (complicated and expensive process without the use of library) 

gif-encoder - encode of smaller gifs using smaller split frames (encoding of gif using smaller sized frames split based on mxn)




## Approach
1. Identify the components to build and solve the problems one by one.
2. Create an row and col input form component that will determine the mxn dimension of the grid
3. Create an image selector component that will only allow gifs to be selected.
4. Create an grid display that will at first preview the image, then improved it to render the dynamic grid. Look into css styling to provide a working grid.
5. Css styling of the app.
6. Refactor to combine the the row and col input component and image selector component into a single grid component that will update both dimensions and image used of the grid with a single submit button.
7. Add error handling for invalid row and col input values and image selection errors (invalid gif formart and no image selected)A
8. Find a way to get the frames and timing delay of gif
9. Find a way to split the extracted frames using row and col input
10. Combine the splt frames based on their row x col coordinate
11. Reconstruct the combined frames to gif
12. Render the gifs based on row x col coordinate in grid. 
13. Testing and bug fixing (input testing, gif image size uploading etc).  

