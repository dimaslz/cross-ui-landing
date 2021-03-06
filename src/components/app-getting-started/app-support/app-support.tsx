import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-support',
  styleUrl: 'app-support.scss',
  shadow: true,
})
export class AppSupport {
  render() {
    return (
      <div class="Installation w-full">
        <h2 class="text-4xl text-left mb-4 border-b">
          {' '}
          Getting started <span class="text-2xl">support</span>
        </h2>

        <p class="text-left text-sm">
          {' '}
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
          cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen.{' '}
        </p>
      </div>
    );
  }
}
