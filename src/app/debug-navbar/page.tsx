import { Navbar } from "@/components/navbar"

export default function DebugNavbar() {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '72px', minHeight: '300vh', background: 'linear-gradient(to bottom, #f0f0f0, #e0e0e0, #d0d0d0)' }}>
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '20px', color: '#222' }}>
            Navbar Height Debug Tool
          </h1>
          
          <div style={{ marginBottom: '30px', background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <h2 style={{ color: '#222', marginBottom: '15px' }}>🔧 Instructions:</h2>
            <ol style={{ lineHeight: '1.8', color: '#555' }}>
              <li>Open browser developer tools (F12)</li>
              <li>Go to the responsive design mode (Ctrl/Cmd + Shift + M)</li>
              <li>Set width to any value (e.g., 1200px)</li>
              <li><strong>Set height to below 600px (e.g., 400px, 500px, 580px)</strong></li>
              <li>Watch the navbar height values below</li>
              <li>The navbar should ALWAYS be 72px high</li>
            </ol>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h2 style={{ color: '#222', marginBottom: '15px' }}>📱 Screen Info:</h2>
              <div id="screen-info" style={{ 
                border: '1px solid #ccc', 
                padding: '15px', 
                background: '#f8f8f8',
                fontFamily: 'monospace',
                fontSize: '14px',
                borderRadius: '4px'
              }}>
                Loading...
              </div>
            </div>

            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
              <h2 style={{ color: '#222', marginBottom: '15px' }}>🎯 Navbar Analysis:</h2>
              <div id="navbar-analysis" style={{ 
                border: '1px solid #ccc', 
                padding: '15px', 
                background: '#f8f8f8',
                fontFamily: 'monospace',
                fontSize: '14px',
                borderRadius: '4px'
              }}>
                Loading...
              </div>
            </div>
          </div>

          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '30px' }}>
            <h2 style={{ color: '#222', marginBottom: '15px' }}>🔍 CSS Media Query Status:</h2>
            <div id="media-query-status" style={{ 
              border: '1px solid #ccc', 
              padding: '15px', 
              background: '#f8f8f8',
              fontFamily: 'monospace',
              fontSize: '14px',
              borderRadius: '4px'
            }}>
              Loading...
            </div>
          </div>

          <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <h2 style={{ color: '#222', marginBottom: '15px' }}>⚠️ Problem Indicators:</h2>
            <div id="problem-indicators" style={{ 
              border: '1px solid #ccc', 
              padding: '15px', 
              background: '#f8f8f8',
              fontFamily: 'monospace',
              fontSize: '14px',
              borderRadius: '4px'
            }}>
              Loading...
            </div>
          </div>
          
          <div style={{ height: '100vh', background: '#fff', border: '1px solid #ccc', marginTop: '30px', borderRadius: '8px' }}>
            <div style={{ padding: '50px', textAlign: 'center' }}>
              <h3 style={{ color: '#222' }}>Scrollable Test Area</h3>
              <p style={{ color: '#666' }}>Scroll and resize to test navbar behavior across different screen heights.</p>
            </div>
          </div>
        </div>

        <script dangerouslySetInnerHTML={{
          __html: `
            function updateDebugInfo() {
              const screenInfo = document.getElementById('screen-info');
              const navbarAnalysis = document.getElementById('navbar-analysis');
              const mediaQueryStatus = document.getElementById('media-query-status');
              const problemIndicators = document.getElementById('problem-indicators');
              
              // Screen info
              if (screenInfo) {
                const isSmallHeight = window.innerHeight < 600;
                screenInfo.innerHTML = 
                  'Window Width: ' + window.innerWidth + 'px\\n' +
                  'Window Height: ' + window.innerHeight + 'px\\n' +
                  'Screen Width: ' + screen.width + 'px\\n' +
                  'Screen Height: ' + screen.height + 'px\\n' +
                  'Is Below 600px Height: ' + (isSmallHeight ? 'YES ⚠️' : 'NO ✅') + '\\n' +
                  'Device Pixel Ratio: ' + window.devicePixelRatio;
              }
              
              // Navbar analysis
              const navbar = document.querySelector('.navbar-simple') || document.querySelector('nav');
              if (navbarAnalysis && navbar) {
                const computedStyle = window.getComputedStyle(navbar);
                const actualHeight = navbar.offsetHeight;
                const isCorrectHeight = actualHeight === 72;
                
                navbarAnalysis.innerHTML = 
                  'Element Found: YES ✅\\n' +
                  'Class: ' + (navbar.className || 'none') + '\\n' +
                  'CSS Height: ' + computedStyle.height + '\\n' +
                  'CSS Min-Height: ' + computedStyle.minHeight + '\\n' +
                  'CSS Max-Height: ' + computedStyle.maxHeight + '\\n' +
                  'Actual Height: ' + actualHeight + 'px\\n' +
                  'Status: ' + (isCorrectHeight ? 'CORRECT ✅' : 'WRONG ❌ (Should be 72px)') + '\\n' +
                  'Overflow: ' + computedStyle.overflow + '\\n' +
                  'Box Sizing: ' + computedStyle.boxSizing;
              } else {
                if (navbarAnalysis) {
                  navbarAnalysis.innerHTML = 'Navbar Element: NOT FOUND ❌';
                }
              }
              
              // Media query status
              if (mediaQueryStatus) {
                const smallHeightQuery = window.matchMedia('(max-height: 600px)');
                mediaQueryStatus.innerHTML = 
                  'Media Query (max-height: 600px): ' + (smallHeightQuery.matches ? 'ACTIVE ⚠️' : 'INACTIVE ✅') + '\\n' +
                  'Should Apply Special CSS: ' + (smallHeightQuery.matches ? 'YES' : 'NO') + '\\n' +
                  'Media Query Object: ' + JSON.stringify({
                    matches: smallHeightQuery.matches,
                    media: smallHeightQuery.media
                  }, null, 2);
              }
              
              // Problem indicators
              if (problemIndicators && navbar) {
                const problems = [];
                const actualHeight = navbar.offsetHeight;
                const isSmallHeight = window.innerHeight < 600;
                
                if (isSmallHeight && actualHeight !== 72) {
                  problems.push('❌ Navbar height is ' + actualHeight + 'px on small screen (should be 72px)');
                }
                
                if (!navbar.classList.contains('navbar-simple')) {
                  problems.push('⚠️ Navbar missing "navbar-simple" class');
                }
                
                const computedStyle = window.getComputedStyle(navbar);
                if (computedStyle.overflow !== 'hidden') {
                  problems.push('⚠️ Overflow is not "hidden": ' + computedStyle.overflow);
                }
                
                if (computedStyle.boxSizing !== 'border-box') {
                  problems.push('⚠️ Box-sizing is not "border-box": ' + computedStyle.boxSizing);
                }
                
                if (problems.length === 0) {
                  problemIndicators.innerHTML = '✅ No problems detected!';
                } else {
                  problemIndicators.innerHTML = problems.join('\\n');
                }
              }
            }
            
            // Update immediately
            updateDebugInfo();
            
            // Update on resize
            window.addEventListener('resize', updateDebugInfo);
            
            // Update periodically
            setInterval(updateDebugInfo, 1000);
            
            // Listen for media query changes
            const mediaQuery = window.matchMedia('(max-height: 600px)');
            mediaQuery.addListener(updateDebugInfo);
          `
        }} />
      </div>
    </div>
  );
}
