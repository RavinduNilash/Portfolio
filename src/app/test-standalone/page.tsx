import { Navbar } from "@/components/navbar"

export default function TestNavbarOnly() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '72px', minHeight: '200vh', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0)' }}>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Standalone Navbar Test</h1>
          
          <div style={{ marginBottom: '20px' }}>
            <h2>Instructions:</h2>
            <ol>
              <li>Open browser developer tools (F12)</li>
              <li>Go to the responsive design mode</li>
              <li>Set width to any value, but height to below 600px (e.g., 400px)</li>
              <li>Check if the navbar height stays at 72px</li>
            </ol>
          </div>

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
          
          <div style={{ height: '100vh', background: '#fff', border: '1px solid #ccc', marginTop: '20px' }}>
            <div style={{ padding: '50px', textAlign: 'center' }}>
              <h3>Test Content Area</h3>
              <p>This tests the standalone navbar component without any hero section interference.</p>
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
                  'Viewport is ' + (window.innerHeight < 600 ? 'BELOW' : 'ABOVE') + ' 600px height';
              }
              
              if (navbarHeight && navbar) {
                const computedStyle = window.getComputedStyle(navbar);
                navbarHeight.innerHTML = 
                  'Navbar Element Found: YES<br>' +
                  'Navbar Height: ' + computedStyle.height + '<br>' +
                  'Navbar Min-Height: ' + computedStyle.minHeight + '<br>' +
                  'Navbar Max-Height: ' + computedStyle.maxHeight + '<br>' +
                  'Navbar Actual Height: ' + navbar.offsetHeight + 'px<br>' +
                  'Status: ' + (navbar.offsetHeight === 72 ? 'CORRECT' : 'WRONG - Should be 72px');
              } else {
                if (navbarHeight) {
                  navbarHeight.innerHTML = 'Navbar Element Found: NO - Check if .test-navbar class exists';
                }
              }
            }
            
            updateDimensions();
            window.addEventListener('resize', updateDimensions);
            setInterval(updateDimensions, 500);
          `
        }} />
      </div>
    </div>
  );
}
