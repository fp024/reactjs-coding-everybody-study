#!/bin/bash

# 현재 스크립트의 위치를 ROOT_DIR로 설정합니다
ROOT_DIR="$(dirname "$(realpath "$0")")"

# 어떤 경로 이하의 node_modules 디렉토리가 전부 삭제될 것인지 출력합니다
echo "Deleting all node_modules directories under: $ROOT_DIR"

# 디렉토리 확인을 위해 일시 정지
read -p "Press any key to continue..."

# 루트 디렉토리의 node_modules와 그 하위 모든 폴더는 제외하고 삭제합니다
find "$ROOT_DIR" -type d -name "node_modules" | while read -r dir; do
    # 루트 디렉토리에서의 상대 경로 계산
    rel_path="${dir#$ROOT_DIR/}"
    
    # 루트의 node_modules로 시작하는 경로는 건너뛰기
    if [[ "$rel_path" == node_modules* ]]; then
        echo "Skipping $dir as it is under root level node_modules"
    else
        echo "Deleting $dir"
        rm -rf "$dir"
    fi
done

# 완료 후 일시 정지
read -p "Press any key to exit..."