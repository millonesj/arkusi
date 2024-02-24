import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

function PostSidebar({ categories, tags }) {
    return (
        <div className="post-sidebar border-[#eee] border p-[50px_29px_66px]">
            <div className="post-searchbar">
                <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
                    Search
                </h2>
                <form className="flex relative">
                    <input
                        className="w-full border-[#ddd] border-opacity-40 border text-[14px] focus-visible:outline-0 py-[15px] pl-[20px] pr-[50px]"
                        placeholder="Search..."
                        type="text"
                        id="search"
                    />
                    <button
                        className="absolute text-[#595959] top-1/2 translate-y-[-50%] right-[30px]"
                        type="submit"
                    >
                        <FaSearch />
                    </button>
                </form>
            </div>
            <div className="post-sidebar-item mt-[50px]">
                <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
                    Recent Posts
                </h2>
                <ul className="post-list">
                    <li className="mb-[15px]">
                        <Link href="/posts/encuentra-la-serenidad-en-tu-hogar-descubre-el-estilo-japandi">
                            <a className="hover:underline">
                                Encuentra la serenidad en tu hogar: Descubre el estilo Japandi
                            </a>
                        </Link>
                    </li>
                    <li className="mb-[15px]">
                        <Link href="/posts/cultiva-tu-propio-oasis-verde:-un-biohuerto-en-casa">
                            <a className="hover:underline">
                                Cultiva tu propio oasis verde: Un biohuerto en casa
                            </a>
                        </Link>
                    </li>
                    <li className="mb-[15px]">
                        <Link href="/posts/diseña-tu-hogar-cuida-el-planeta-claves-para-un-interiorismo-sostenible">
                            <a className="hover:underline">
                            Diseña tu hogar, cuida el planeta: claves para un interiorismo sostenible
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts/neuroarquitectura-diseñando-espacios-para-la-mente">
                            <a className="hover:underline">
                                Neuroarquitectura: Diseñando espacios para la mente
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="post-sidebar-item post-sidebar-item mt-[50px]">
                <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
                    Categories
                </h2>
                <ul className="post-list">
                    {categories.map((category) => (
                        <li className="mb-[15px] last:mb-0" key={category}>
                            <Link href={`/category/${category}`}>
                                <a className="hover:underline capitalize">
                                    {category}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="post-sidebar-item post-sidebar-item mt-[50px]">
                <h2 className="text-[20px] font-bold text-[#222] border-[#eee] border-b pb-[11px] mb-[20px]">
                    Popular tags
                </h2>
                <ul className="post-tags flex flex-wrap">
                    {tags.map((popularTag) => (
                        <li className=" mr-[10px] mb-[5px]" key={popularTag}>
                            <Link href={`/tag/${popularTag}`}>
                                <a className="hover:underline">{popularTag},</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

PostSidebar.propTypes = {
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
};

export default PostSidebar;
