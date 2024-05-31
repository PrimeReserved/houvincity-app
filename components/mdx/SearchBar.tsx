"use client";

import Fuse from 'fuse.js';
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import Modal from 'react-modal';
import { FaSearch } from 'react-icons/fa';
import { SearchItem } from '@/typings';

interface SearchComponentProps {
  data: SearchItem[];
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '600px',
    overflowY: 'auto' as const,
  },
};

export default function SearchBar({ data }: Readonly<SearchComponentProps>) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fuse = new Fuse(data, {
    keys: ['title', 'content', 'path'],
    includeMatches: true,
    threshold: 0.3,
  });

  useEffect(() => {
    const fuseInstance = new Fuse(data, {
      keys: ['title', 'content', 'path'],
      includeMatches: true,
      threshold: 0.3,
    });
  }, [data]);

  const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);

    if (value.trim() !== '') {
      const result = fuse.search(value).map(({ item }) => item);
      setResults(result);
      setIsModalOpen(true);
    } else {
      setResults([]);
      setIsModalOpen(false);
    }
  }, 300);
  

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
          placeholder="Search by title or content"
          value={query}
          onChange={handleSearch}
        />
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2">
          <FaSearch />
        </button>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Search Result">
        <div>
          <h4>Search Results</h4>
          {results.length > 0 ? (
            results.map((item, idx) => (
              <div key={idx}>
                <a href={item.path} className="link link-hover">{item.title}</a>
                <p>{item.content}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
          <div className="">
            <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      </Modal>
    </div>
  );
}