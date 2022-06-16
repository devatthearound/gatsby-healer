import styled from "styled-components";
import React, { useState } from "react";

type Props = {
    style: React.CSSProperties
    defaultValue?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
};

const ImageUpload = ({ defaultValue, onChange, style }: Props) => {
    const [previewImage, setPreviewImage] = useState<string>(defaultValue ? defaultValue : '');

    const hanlderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const nowImageUrl = URL.createObjectURL(e.target.files[0]);
            setPreviewImage(nowImageUrl);
        }

        return onChange(e);
    };

    return (
        <>

            <input style={style} name="profile" type="file" onChange={hanlderChange} />
            {
                previewImage &&
                <ImageWrap>
                    <img src={previewImage} height={150} width={150} />
                </ImageWrap>
            }
        </>
    );
};



const ImageWrap = styled.div`
  margin: 0px 10px;
`;

const ImageUploadWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0px;
  padding: 10px 20px;
  background-color: rgba(99, 114, 131, 0.02);
  border-radius: 10px;
  border: 1px solid #d2d4de;
`;

export default ImageUpload