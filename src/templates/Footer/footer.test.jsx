/**
 * @jest-environment jsdom
 */

 import React from 'react';
 import { render, screen } from '@testing-library/react';
 import '@testing-library/jest-dom/extend-expect';
 import Footer from './index';
 
 describe('<Footer />', () => {
  test('Placeholder', () => {
    expect(true).toBeTruthy();
  });
 });