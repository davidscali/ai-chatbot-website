// jsx.d.ts

// Import React module to access JSX types
import 'react';

// Augment the module to add types for HTML elements
declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // Allow any attribute that a div element accepts
        // Add more attributes as needed
        className?: string;
        placeholder?: string;
        type?: string;
    }
}

// Define the IntrinsicElements interface for JSX
// Add more elements as needed
interface IntrinsicElements {
    div: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    input: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    form: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
    button: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    table: DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>;
    thead: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    tbody: DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>;
    tr: DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>;
    th: DetailedHTMLProps<HTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>;
    td: DetailedHTMLProps<HTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>;
    p: DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    em: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    // Add other elements you use in your JSX
}
