import { FC, useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
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
      setLoading(false);
      wmcApi.get('/').then(({ data }) => {
        const filteredData = data.filter((user: IUserWithPalettes) => {
          const regex = new RegExp(search, 'i');

          return regex.test(user.username);
        });

        setLoading(false);
        setResults(filteredData);
      });
    }
  }, [search]);

  return (
    <div className="search-bar">
      <form className="search-form">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
        />
        <button type="submit">
          <FiSearch />
        </button>
      </form>

      <ul className="result-list">
        {loading ? (
          <Loading size={50} />
        ) : (
          results.map((user) => (
            <li>
              <Link to={`/${user.username}`} />
            </li>
          ))
        )}

      </ul>
    </div>
  );
};
