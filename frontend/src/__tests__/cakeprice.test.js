import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from 'react-router-dom';
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import OrderPage from "../pages/Order_Page";
import Home from "../pages/Home";
import OrderCard from "../components/Order_Card";
import About from "../pages/About";
import ProductPage from "../pages/ProductPage";
import add from "../pages/sum";
import userEvent from '@testing-library/user-event';
// import CakeProductPage from "../pages/CakeProductPage"
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';



// test("should render the cake page", () => {
//     render(<CakeProductPage />)
//     const toDoElem = screen.getByTestId("whatsapp-button")
//     expect(toDoElem).toBeInTheDocument()
// });

test("renders previous orders", () => {
    render(<OrderPage />);

    const pageTitle = screen.getByText("Previous Orders");
    expect(pageTitle).toBeInTheDocument();
  });

describe('Footer component', () => {
    test('renders social icons', () => {
        render(<Footer />);
        const toDoElem = screen.getByTestId("socialicons");
        expect(toDoElem).toBeInTheDocument();
    });
});

/////////////////////// CONTACT PAGE ////////////////////////////////
test("renders contact page with form", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );

    const headerText = screen.getByText("Freshly Baked Eggless Cakes");
    expect(headerText).toBeInTheDocument();
  
    // Check if the form is rendered
    const nameInput = screen.getByLabelText("Your Name");
    const emailInput = screen.getByLabelText("Email Address");
    const phoneInput = screen.getByLabelText("Phone Number");
    const messageInput = screen.getByLabelText("Your Message");
    const submitButton = screen.getByText("Let's Talk");
  
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

    const whatsappIcon = screen.getByAltText("Whatsapp");
    expect(whatsappIcon).toBeInTheDocument();
    expect(whatsappIcon.closest("a")).toHaveAttribute("href", "https://wa.me/919911114128");

    const instagramIcon = screen.getByAltText("Instagram");
    expect(instagramIcon).toBeInTheDocument();
    expect(instagramIcon.closest("a")).toHaveAttribute("href", "https://www.instagram.com/paa.creations");

    const facebookIcon = screen.getByAltText("Facebook");
    expect(facebookIcon).toBeInTheDocument();
    expect(facebookIcon.closest("a")).toHaveAttribute("href", "https://www.facebook.com/paacreations");

  });

  test("renders contact page with form", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
 
    // Check if the form is rendered
    const nameInput = screen.getByLabelText("Your Name");
    const emailInput = screen.getByLabelText("Email Address");
    const phoneInput = screen.getByLabelText("Phone Number");
    const messageInput = screen.getByLabelText("Your Message");
    const submitButton = screen.getByText("Let's Talk");
  
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

  });


const addition = require('../pages/sum');


test('adds positive numbers', () => {
    expect(addition(1, 2)).toBe(3);
});


// ///////////////////////// CAKE PRODUCT PAGE ////////////////////////////////

// jest.mock("../sanityClient");

// test("renders cake product page with cake details", async () => {
//   const mockFetch = jest.fn();
//   mockFetch.mockResolvedValue({
//     name: "Chocolate Cake",
//     description: "Delicious chocolate cake",
//     price: 20,
//     ingredients: ["Chocolate", "Flour", "Sugar"],
//     imageUrl: "https://example.com/chocolate-cake.jpg",
//   });

//   client.fetch = mockFetch;

//   render(
//     <MemoryRouter initialEntries={['/chocolate-cake']}>
//       <Route path='/:slug' component={CakeProductPage} />
//     </MemoryRouter>
//   );

//   // Check if the cake details are rendered
//   const cakeName = await screen.findByText("Chocolate Cake");
//   const cakeDescription = screen.getByText("Delicious chocolate cake");
//   const cakePrice = screen.getByText("Rs. 20");
//   const ingredientsList = screen.getByText("Ingredients:");
//   const imageUrl = screen.getByAltText("Chocolate Cake");

//   expect(cakeName).toBeInTheDocument();
//   expect(cakeDescription).toBeInTheDocument();
//   expect(cakePrice).toBeInTheDocument();
//   expect(ingredientsList).toBeInTheDocument();
//   expect(imageUrl).toBeInTheDocument();
// });



// ////////////////////////////  CONTACT /////////////////////////////////

test("renders contact page and handles navigation", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    );
  
    // Check if elements are present on the page
    const headerText = screen.getByText("Freshly Baked Eggless Cakes");
    const addressText = screen.getByText("A-1802, Amrapali Sapphire, Sector-45, Noida");
    const contactForm = screen.getByLabelText("Your Name");
  
    expect(headerText).toBeInTheDocument();
    expect(addressText).toBeInTheDocument();
    expect(contactForm).toBeInTheDocument();
  
    // Simulate navigation clicks
    // fireEvent.click(screen.getByText("CAKES"));
    // fireEvent.click(screen.getByText("ABOUT"));
    // fireEvent.click(screen.getByAltText("PAA Creations Logo"));

    // Here, we are checking if the window.location.href changes after the click
    //------------- can check bottom lines --------------------//
        // expect(window.location.href).toContain("/");
        // fireEvent.click(screen.getByText("Order Now"));
        // expect(window.location.href).toContain("/about");
  });

  test('renders contact form and handles form submission', () => {
    // const { getByLabelText, getByText } = render(<Contact />);

    render(
        <MemoryRouter>
          <Contact />
        </MemoryRouter>
      );

    const headerText = screen.getByText("Your Name");
    const addressText = screen.getByText("Email Address");
    const contactForm = screen.getByLabelText("Phone Number");
    const message = screen.getByLabelText("Your Message");
  
    expect(headerText).toBeInTheDocument();
    expect(addressText).toBeInTheDocument();
    expect(contactForm).toBeInTheDocument();
    expect(message).toBeInTheDocument();

  });
//   //////////////////////////// Home/////////////////////////////////////////////


//   jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useNavigate: jest.fn(),
//   }));
  
//   // Mock the client.fetch method
//   jest.mock('../sanityClient', () => ({
//     fetch: jest.fn(() => Promise.resolve([])), // You may need to adjust the mock response based on your actual data
//   }));
  
//   describe('Home Page', () => {
//     it('renders home page components', async () => {
//       render(<Home />);
//       expect(screen.getByText('FRESHLY BAKED')).toBeInTheDocument();
//         expect(screen.getByText('OUR CAKES')).toBeInTheDocument();
  
//       // Wait for the asynchronous operation to complete
//       await waitFor(() => {
//         // You can add more specific queries based on your UI structure
//         expect(screen.getByText('FRESHLY BAKED')).toBeInTheDocument();
//         expect(screen.getByText('OUR CAKES')).toBeInTheDocument();
//       });
//     });
  
//     it('navigates to "/about" when clicking on Rectangle11', async () => {
//       render(<Home />);
      
//       fireEvent.click(screen.getByTestId('Rectangle11'));
  
//       // Wait for the asynchronous operation to complete
//       await waitFor(() => {
//         // Ensure that useNavigate is called with the correct argument
//         expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/about');
//       });
//     });
  
//     // Add more tests for other user interactions and functionalities
//   });

  /////////////// ABOUT PAGE ////////////////////

  test("renders About page with proper content", async () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  
    // Check if the main title is rendered
    const mainTitle = screen.getByText("About Paa Creations");
    expect(mainTitle).toBeInTheDocument();
  
    // Check if the founder's story section is rendered
    const foundersStoryTitle = screen.getByText("Founder's Story");
    expect(foundersStoryTitle).toBeInTheDocument();
  
    // Mock data for description
    const mockDescription = "Sample description text";
    const descriptionElement = await screen.findByText(mockDescription);
    expect(descriptionElement).toBeInTheDocument();
  
    // Check if the 'Get in Touch' button is present and clicking navigates to '/contact'
    const getInTouchButton = screen.getByText("Get in Touch");
    expect(getInTouchButton).toBeInTheDocument();
  
    // Simulate click event and verify if it navigates to '/contact'
    getInTouchButton.click();
    await waitFor(() => {
      expect(window.location.href).toContain("/contact");
    });
  });

  test("opens Instagram profile in a new tab on Instagram link click", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  
    // Simulate clicking on the Instagram link
    const instagramLink = screen.getByAltText("Instagram"); // Replace "Instagram" with the alt text of the Instagram image
    fireEvent.click(instagramLink);
  
    // Ensure that a new tab for the Instagram profile is opened
    expect(window.open).toHaveBeenCalledWith("https://www.instagram.com/paacreations");
    // Add more specific checks or assertions for the link functionality
  });

  test("navigates to 'about' page when clicking on a specific section", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  
    // Simulate navigation clicks
    const aboutSection = screen.getByText("About"); // Replace "About" with the text used to navigate to the About page
    fireEvent.click(aboutSection);
    
    // Ensure that navigation to the 'about' page occurred
    expect(window.location.pathname).toBe("/about");
    // Add more assertions or expectations based on the specific navigation action or behavior
  });

  ////////////////// ORDER PAGE /////////////////////

  test("renders Previous Orders section with order details", async () => {
    render(
      <MemoryRouter>
        <OrderPage />
      </MemoryRouter>
    );
  
    // Check if the heading for Previous Orders is rendered
    const headingElement = screen.getByText("Previous Orders");
    expect(headingElement).toBeInTheDocument();
  
    // Mocked order data
    const mockedOrder = {
      dateOfOrder: "2023-11-20",
      productName: "Chocolate Cake",
      deliveryAddress: "123 Main St",
      orderTotal: 30,
      productImgUrl: "https://example.com/chocolate-cake.jpg",
      orderStatus: "Delivered",
    };
  
    // Check if the OrderCard component is rendered with order details
    const dateElement = await screen.findByText(mockedOrder.dateOfOrder);
    expect(dateElement).toBeInTheDocument();
  
    const cakeNameElement = screen.getByText(mockedOrder.productName);
    expect(cakeNameElement).toBeInTheDocument();
  
    const addressElement = screen.getByText(mockedOrder.deliveryAddress);
    expect(addressElement).toBeInTheDocument();
  
    const amountElement = screen.getByText(`$${mockedOrder.orderTotal}`);
    expect(amountElement).toBeInTheDocument();
  
    // Add more specific checks for other order details displayed on the page
  });

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useNavigate: jest.fn(),
//   }));
  
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });
  
//   test('renders home page with cake information', async () => {
//     const mockCakesData = [
//       {
//         name: 'Test Cake 1',
//         slugurl: { current: 'test-cake-1' },
//         description: 'This is a test cake.',
//         price: 20,
//         cakeimage: { asset: { _id: '1', url: 'test-image-1.jpg' } },
//       },
//       // Add more mock data as needed
//     ];
  
//     jest.spyOn(global, 'fetch').mockResolvedValue({
//       json: jest.fn().mockResolvedValue(mockCakesData),
//     });
  
//     render(
//       <BrowserRouter>
//         <Home />
//       </BrowserRouter>
//     );
  
//     const cakeElements = await screen.findAllByText(/Test Cake/);
  
//     expect(cakeElements.length).toBeGreaterThan(0);
//     // You can add more assertions based on your component's content
//   });

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));
  
//   jest.mock('../sanityClient', () => ({
//     fetch: jest.fn(() => Promise.resolve([])),
//   }));
  
//   test('renders Home component without crashing', () => {
//     render(<Home />);
//     expect(screen.getByText('More Cakes')).toBeInTheDocument();
//   });
  
//   test('navigates to /about when the about button is clicked', () => {
//     render(<Home />);
//     userEvent.click(screen.getByText('About'));
//     expect(useNavigate).toHaveBeenCalledWith('/about');
//   });
  
//   test('fetches data and renders cake cards', async () => {
//     const mockCakesData = [
//       { name: 'Cake 1', slugurl: 'cake-1', description: 'Delicious cake', price: 20, cakeimage: { asset: { _id: '1', url: 'cake1.jpg' } } },
//       // Add more mock data as needed
//     ];
  
//     jest.spyOn(global, 'fetch').mockResolvedValueOnce({
//       json: jest.fn().mockResolvedValueOnce(mockCakesData),
//     });
  
//     render(<Home />);
    
//     expect(await screen.findByText('Delicious cake')).toBeInTheDocument();
//   });



/////////////////////////////// ORDER_CARD /////////////////////////////////////////////////////


const mockOrder = {
    date: '2023-11-26',
    cakeName: 'Chocolate Delight',
    address: '123 Main St, Cityville',
    amount: '$25.99',
    imageUrl: 'path/to/cake-image.jpg',
    status: 'Pending',
  };
  
  test('renders OrderCard component with correct information', () => {
    render(
      <OrderCard
        date={mockOrder.date}
        cakeName={mockOrder.cakeName}
        address={mockOrder.address}
        amount={mockOrder.amount}
        imageUrl={mockOrder.imageUrl}
        status={mockOrder.status}
      />
    );
  
    // Check if the rendered content matches the provided data
    expect(screen.getByText(mockOrder.cakeName)).toBeInTheDocument();
    expect(screen.getByText(`Order Date: ${mockOrder.date}`)).toBeInTheDocument();
    expect(screen.getByText(`Order Amount: ${mockOrder.amount}`)).toBeInTheDocument();
    expect(screen.getByText(`Order Address: ${mockOrder.address}`)).toBeInTheDocument();
    expect(screen.getByText(`Order Status: ${mockOrder.status}`)).toBeInTheDocument();
  });
  

// /////////////////// PRODUCT PAGE ///////////////////////////////


// test('renders the WhatsApp button', () => {
//     render(
//       <MemoryRouter>
//         <ProductPage />
//       </MemoryRouter>
//     );
  
//     const whatsappButton = screen.getByText('Whatsapp');
//     expect(whatsappButton).toBeInTheDocument();
//   });

//   test('navigates to "/product-page1" when clicking on Image 2', () => {
//     render(
//       <MemoryRouter>
//         <ProductPage />
//       </MemoryRouter>
//     );
  
//     fireEvent.click(screen.getByAltText(''), { name: 'IMAGE2' });
  
//     expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/product-page1');
//   });


//   test('navigates to "/product-page1" when clicking on Image 2', () => {
//     render(
//       <MemoryRouter>
//         <ProductPage />
//       </MemoryRouter>
//     );
  
//     const image2 = screen.getByAltText("facebook");
//     fireEvent.click(image2);
  
//     expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/product-page1');
//   });

// // jest.mock('react-router-dom', () => ({
// //     ...jest.requireActual('react-router-dom'),
// //     useNavigate: jest.fn(),
// //   }));
  
// //   describe('ProductPage', () => {
// //     it('navigates to "/" when clicking on Home/Cakes link', () => {
// //       render(
// //         <MemoryRouter>
// //           <ProductPage />
// //         </MemoryRouter>
// //       );
  
// //       fireEvent.click(screen.getByText('Home / Cakes / ChocoNilla'));
  
// //       expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/');
// //     });
  
// //     it('navigates to "/product-page1" when clicking on IMAGE2', () => {
// //       render(
// //         <MemoryRouter>
// //           <ProductPage />
// //         </MemoryRouter>
// //       );
  
// //       fireEvent.click(screen.getByAltText(''), { name: 'IMAGE2' });
  
// //       expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/product-page1');
// //     });
  
// //     it('navigates to "/product-page1" when clicking on Rectangle9', () => {
// //       render(
// //         <MemoryRouter>
// //           <ProductPage />
// //         </MemoryRouter>
// //       );
  
// //       fireEvent.click(screen.getByTestId('Rectangle9'));
  
// //       expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/product-page1');
// //     });
  
// //     it('navigates to "/" when clicking on Rectangle15', () => {
// //       render(
// //         <MemoryRouter>
// //           <ProductPage />
// //         </MemoryRouter>
// //       );
  
// //       fireEvent.click(screen.getByTestId('Rectangle15'));
  
// //       expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/');
// //     });
  
// //     it('navigates to "/about" when clicking on About link', () => {
// //       render(
// //         <MemoryRouter>
// //           <ProductPage />
// //         </MemoryRouter>
// //       );
  
// //       fireEvent.click(screen.getByText('About'));
  
// //       expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/about');
// //     });
  
// //     it('navigates to "/contact" when clicking on Contact link', () => {
// //       render(
// //         <MemoryRouter>
// //           <ProductPage />
// //         </MemoryRouter>
// //       );
  
// //       fireEvent.click(screen.getByText('Contact'));
  
// //       expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/contact');
// //     });
  
// //     it('navigates to "/home" when clicking on PaaCreationsLogo11', () => {
// //       render(
// //         <MemoryRouter>
// //           <ProductPage />
// //         </MemoryRouter>
// //       );
  
// //       fireEvent.click(screen.getByAltText(''), { name: 'PaaCreationsLogo11' });
  
// //       expect(require('react-router-dom').useNavigate).toHaveBeenCalledWith('/home');
// //     });
// //   });