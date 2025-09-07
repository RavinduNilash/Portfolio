export default function TestNavbar() {
  return (
    <div style={{ paddingTop: '72px', minHeight: '200vh' }}>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Navbar Height Test</h1>
        
        <div style={{ marginBottom: '20px' }}>
          <h2>Current screen dimensions:</h2>
          <div id="dimensions" style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            background: '#f5f5f5',
            fontFamily: 'monospace'
          }}>
            Loading...
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <h2>Navbar height check:</h2>
          <div id="navbar-height" style={{ 
            border: '1px solid #ccc', 
            padding: '10px', 
            background: '#f5f5f5',
            fontFamily: 'monospace'
          }}>
            Loading...
          </div>
        </div>

        <p>Scroll down and resize the window to test different screen heights...</p>
        
        <div style={{ height: '100vh', background: 'linear-gradient(45deg, #f0f0f0, #e0e0e0)' }}>
          <div style={{ padding: '50px', textAlign: 'center' }}>
            <h3>Test Content Area</h3>
            <p>This is to test scrolling and navbar behavior at different screen heights.</p>
          </div>
        </div>

        <div style={{ height: '100vh', background: 'linear-gradient(45deg, #e0e0e0, #d0d0d0)' }}>
          <div style={{ padding: '50px', textAlign: 'center' }}>
            <h3>More Test Content</h3>
            <p>Keep testing by resizing the browser window height to below 600px.</p>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          function updateDimensions() {
            const dimensions = document.getElementById('dimensions');
            const navbarHeight = document.getElementById('navbar-height');
            const navbar = document.querySelector('.test-navbar');
            
            if (dimensions) {
              dimensions.innerHTML = 
                'Window Width: ' + window.innerWidth + 'px<br>' +
                'Window Height: ' + window.innerHeight + 'px<br>' +
                'Screen Width: ' + screen.width + 'px<br>' +
                'Screen Height: ' + screen.height + 'px';
            }
            
            if (navbarHeight && navbar) {
              const computedStyle = window.getComputedStyle(navbar);
              navbarHeight.innerHTML = 
                'Navbar Height: ' + computedStyle.height + '<br>' +
                'Navbar Min-Height: ' + computedStyle.minHeight + '<br>' +
                'Navbar Max-Height: ' + computedStyle.maxHeight + '<br>' +
                'Navbar Computed Height: ' + navbar.offsetHeight + 'px';
            }
          }
          
          updateDimensions();
          window.addEventListener('resize', updateDimensions);
          setInterval(updateDimensions, 1000);
        `
      }} />
    </div>
  );
}
