// 必要なアイコンを個別にインポートします。
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props = {
  color: string;
  height: number;
  // 使用するアイコンのタイプを拡張
  type: 'Search' | 'FavoriteBorder' | 'Favorite' | 'Close' | 'NavigateNext';
  width: number;
};

export const SvgIcon: React.FC<Props> = ({ color, height, type, width }) => {
  // アイコンタイプに基づいて適切なアイコンコンポーネントを動的に選択
  let Icon;
  switch (type) {
    case 'Search':
      Icon = SearchIcon;
      break;
    case 'FavoriteBorder':
      Icon = FavoriteBorderIcon;
      break;
    case 'Favorite':
      Icon = FavoriteIcon;
      break;
    case 'Close':
      Icon = CloseIcon;
      break;
    case 'NavigateNext':
      Icon = NavigateNextIcon;
      break;
    default:
      throw new Error(`Unsupported icon type: ${type}`);
  }

  return <Icon style={{ color, height: `${height}px`, width: `${width}px` }} />;
};
