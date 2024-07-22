# Gif Grid Splitter App Niccolo Lampa

Takes gif image of any aspect ratio / size and displays in a grid. 

![Screenshot 2024-07-22 at 3 45 10 PM](https://github.com/user-attachments/assets/278dcfbd-501d-4ff3-8f6f-4a52652283a2)


## Running the Gif Grid Splitter App

First let's install the dependencies by running:

```bash
yarn install
#or
npm install

```

Then run teh development server:

```bash
yarn dev
# or 
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo 


Gif Grid Splitter:

https://github.com/user-attachments/assets/b7f2927c-6da5-4d71-9e4a-feff2c8fae6c


Error Handling: 

No image

![Screenshot 2024-07-22 at 3 43 13 PM](https://github.com/user-attachments/assets/c09b5d9b-15cc-4b27-a632-aaf062a7a4f3)

Invalid rows or column values

![Screenshot 2024-07-22 at 3 43 24 PM](https://github.com/user-attachments/assets/95d0c450-7147-4108-8b70-4914470a473e)

![Screenshot 2024-07-22 at 3 44 30 PM](https://github.com/user-attachments/assets/5b96c9f1-755d-4000-b56d-887f8292c68b)

## Dependencies Used

Used Next.js and Tailwind css. All other features are created without the use of third-party libraries. 


## Approach
1. Identify the components to build and solve the problems one by one.
2. Create an row and col input form component that will determine the mxn dimension of the grid
3. Create an image selector component that will only allow gifs to be selected.
4. Create an grid display that will at first preview the image, then improved it to render the dynamic grid. Look into css styling to provide a working grid.
5. Css Styling of the app.
6. Refactor to combine the the row and col input component and image selector component into a single grid component that will update both dimensions and image used of the grid with a single submit button.
7. Add error handling for invalid row and col input values and image selection errors (invalid gif formart and no image selected)
8. Testing and bug fixing. 

