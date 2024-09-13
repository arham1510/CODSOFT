document.addEventListener('DOMContentLoaded', () => {
    // Toggle Panel Options
    const panelButton = document.querySelector('.panel-all i');
    const panelOptions = document.querySelector('.panel-option');
    
    if (panelButton && panelOptions) {
        panelButton.addEventListener('click', () => {
            panelOptions.classList.toggle('show');
        });
    }

    // Handle Search Functionality
    const searchInput = document.querySelector('.search-input');
    const searchIcon = document.querySelector('.search-icon');
    
    if (searchInput && searchIcon) {
        searchIcon.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: ${query}`);
                // Add your search functionality here
            } else {
                alert('Please enter a search term.');
            }
        });
    }

    // Back to Top Button
    const backToTopButton = document.querySelector('.footer-panel1 a');
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Handle Sign In Button
    const signInButton = document.querySelector('.nav-signin');
    
    if (signInButton) {
        signInButton.addEventListener('click', () => {
            console.log('Sign In button clicked');
            window.location.href = 'signin.html'; // Verify this URL
        });
    }

    // Handle Bag Button
    const bagButton = document.querySelector('.nav-cart');
    
    if (bagButton) {
        bagButton.addEventListener('click', () => {
            window.location.href = 'cart.html'; // Verify this URL
        });
    }

    // Handle Orders Button
    const ordersButton = document.querySelector('.nav-orders');
    
    if (ordersButton) {
        ordersButton.addEventListener('click', () => {
            window.location.href = 'orders.html'; // Verify this URL
        });
    }

    // Handle Liked Items Button
    const likedItemsButton = document.querySelector('.nav-likeditems');
    
    if (likedItemsButton) {
        likedItemsButton.addEventListener('click', () => {
            window.location.href = 'liked-items.html'; // Verify this URL
        });
    }

    // Handle "See More" Buttons
    const seeMoreButtons = document.querySelectorAll('.see-more');
    seeMoreButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const category = event.target.getAttribute('data-category');
            handleSeeMoreClick(category);
        });
    });

    function handleSeeMoreClick(category) {
        switch(category) {
            case 'oil':
                window.location.href = 'oil-paintings.html';
                break;
            case 'ACRYLIC':
                window.location.href = 'acrylic-paintings.html';
                break;
            case 'CANVAS':
                window.location.href = 'canvas-paintings.html';
                break;
            case 'REALISTIC':
                window.location.href = 'realistic-paintings.html';
                break;
            case 'SKETCHING':
                window.location.href = 'sketching.html';
                break;
            case 'PENCIL':
                window.location.href = 'pencil-art.html';
                break;
            case '3D':
                window.location.href = '3d-drawings.html';
                break;
            case 'CRAYON':
                window.location.href = 'CRAYON-ARTS.html';
                break;
            default:
                console.log('Unknown category');
        }
    }
});
