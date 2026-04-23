export function initDemoData() {
  if (!localStorage.getItem('users')) {
    const demoUsers = [
      {
        id: 'user1',
        email: 'user@demo.com',
        password: 'password123',
        name: 'Demo User',
        isAdmin: false,
      },
      {
        id: 'admin1',
        email: 'admin@demo.com',
        password: 'admin123',
        name: 'Admin User',
        isAdmin: true,
      },
    ];
    localStorage.setItem('users', JSON.stringify(demoUsers));
  }

  if (!localStorage.getItem('orders')) {
    localStorage.setItem('orders', JSON.stringify([]));
  }
}
