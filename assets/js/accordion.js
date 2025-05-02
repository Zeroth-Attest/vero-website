// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
    // Find all accordion containers
    const accordionContainers = document.querySelectorAll('.problems-accordion, .principles-accordion');
    
    // Process each container
    accordionContainers.forEach(container => {
        const accordionItems = container.querySelectorAll('.accordion-item');
        
        // Set initial state - expand first item in each accordion
        if (accordionItems.length > 0) {
            accordionItems[0].classList.add('active');
        }
        
        // Add click handlers to all headers
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            
            header.addEventListener('click', () => {
                // If already active, just close it
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                } else {
                    // Close all items in this container
                    accordionItems.forEach(otherItem => {
                        otherItem.classList.remove('active');
                    });
                    
                    // Open the clicked item
                    item.classList.add('active');
                }
            });
        });
    });
}); 