import handleSidebarOpen from './components/sidebar';

window.addEventListener('DOMContentLoaded', () => {
  handleSidebarOpen('.js-sidebar', '.js-mobile-btn', '.js-header', '.js-content');
});
