class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // Tạo 9 Set cho hàng, 9 Set cho cột, và 9 Set cho các khối 3x3
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const boxes = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                // Nếu ô trống (ký tự '.'), bỏ qua và kiểm tra ô tiếp theo
                if (val === '.') {
                    continue;
                }

                // Tính toán chỉ số của hộp 3x3 chứa ô (r, c)
                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // Nếu số đã tồn tại ở hàng, cột hoặc hộp này rồi -> Bảng không hợp lệ
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }

                // Nếu chưa có, thêm số này vào các Set tương ứng để đánh dấu
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);
            }
        }

        // Nếu duyệt hết bảng mà không vi phạm quy tắc nào
        return true;
    }
}