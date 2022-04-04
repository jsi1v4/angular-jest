import { render, screen, fireEvent } from '@testing-library/angular';

import { AppComponent } from '@/app/app.component';

describe('AppComponent', () => {
  test('should render counter', async () => {
    await render(AppComponent, {
      componentProperties: { counter: 5 },
    });

    expect(screen.getByText('Current Count: 5')).toBeDefined();
  });

  test('should increment the counter on click', async () => {
    await render(AppComponent, {
      componentProperties: { counter: 5 },
    });

    fireEvent.click(screen.getByText('+'));

    expect(screen.getByText('Current Count: 6')).toBeDefined();
  });
});
