import QuickSort from './index';
import { multipleRandomSortingTest } from '../../../utils';

describe('sorting', multipleRandomSortingTest(100, 'quick sort', QuickSort));