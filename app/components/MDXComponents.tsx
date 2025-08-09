export const MDXComponents = {
  // Headings
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1
      className="text-4xl font-bold tracking-tight mt-8 mb-4 first:mt-0"
      {...props}
    />
  ),
  h2: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h2 className="text-3xl font-semibold mt-12 mb-4 first:mt-0" {...props} />
  ),
  h3: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h3 className="text-2xl font-semibold mt-8 mb-4 first:mt-0" {...props} />
  ),
  h4: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h4 className="text-xl font-semibold mt-6 mb-3 first:mt-0" {...props} />
  ),
  h5: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h5 className="text-lg font-semibold mt-6 mb-3 first:mt-0" {...props} />
  ),
  h6: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h6 className="text-base font-semibold mt-6 mb-3 first:mt-0" {...props} />
  ),

  // Text elements
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className="mb-6 leading-relaxed" {...props} />
  ),

  // Lists
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className="my-6 ml-6 list-disc space-y-2" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol className="my-6 ml-6 list-decimal space-y-2" {...props} />
  ),
  li: (props: React.HTMLProps<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),

  // Links
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-2 hover:no-underline transition-colors"
      {...props}
    />
  ),

  // Code
  code: (props: React.HTMLProps<HTMLElement>) => (
    <code
      className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-6 overflow-x-auto">
      <code
        className="text-gray-800 dark:text-gray-200 text-sm font-mono bg-transparent p-0"
        {...props}
      />
    </pre>
  ),

  // Blockquote
  blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 my-6 italic text-gray-700 dark:text-gray-300"
      {...props}
    />
  ),

  // Images
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
      className="my-8 rounded-lg border border-gray-200 dark:border-gray-700 w-full"
      {...props}
    />
  ),

  // Horizontal rule
  hr: (props: React.HTMLProps<HTMLHRElement>) => (
    <hr
      className="my-12 border-0 h-px bg-gray-200 dark:bg-gray-700"
      {...props}
    />
  ),

  // Tables
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 overflow-x-auto">
      <table
        className="w-full border-collapse border border-gray-200 dark:border-gray-700"
        {...props}
      />
    </div>
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className="border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className="border border-gray-200 dark:border-gray-700 px-4 py-2"
      {...props}
    />
  ),

  // Strong and emphasis
  strong: (props: React.HTMLProps<HTMLElement>) => (
    <strong
      className="font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    />
  ),
  em: (props: React.HTMLProps<HTMLElement>) => (
    <em className="italic" {...props} />
  ),

  // Custom wrapper for the entire content
  wrapper: ({ children, ...props }: { children: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
};
