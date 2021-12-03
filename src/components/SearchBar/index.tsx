import { FC, useEffect, useState } from 'react';
import { FaBackspace } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { IUserWithPalettes } from '../../types';

import { wmcApi } from '../../api';

import { Loading } from '../Loading';

import './index.css';

// interface ISearchBarProps {}

// export const SearchBar: FC<ISearchBarProps> = () => {
export const SearchBar: FC = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<IUserWithPalettes[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search) {
      setLoading(true);
      wmcApi.get('/').then(({ data }) => {
        const filteredData = data.filter((user: IUserWithPalettes) => {
          const regex = new RegExp(search, 'i');

          return regex.test(user.username);
        });

        setLoading(false);
        setResults(filteredData);
      });
    } else {
      setResults([]);
    }
  }, [search]);

  return (
    <div className="search-area">
      <div className="search-bar">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button onClick={() => setSearch('')} type="button">
          <FaBackspace />
        </button>
      </div>

      <ul className="result-list">
        {loading ? (
          <Loading size={50} />
        ) : (
          results.map((user) => (
            <li key={user._id}>
              <Link
                onClick={() => {
                  setSearch('');
                  setResults([]);
                }}
                to={`/${user.username}`}
              >
                {user.username}

              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
