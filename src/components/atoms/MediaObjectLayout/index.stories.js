import React from "react";
import MediaObjectLayout from "./index";

export default (stories) =>
  stories
    .add("デフォルト", () => (
      <MediaObjectLayout>
        <div>
          <img
            src="mock/images/img01.jpg"
            width="192"
            height="108"
            alt="MediaObjectLayout を説明するためのサンプル画像"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          dignissimos culpa minus tempore ea quam veniam, quas rerum praesentium
          quo! Dolores, cum eaque. Soluta possimus quae consequuntur provident
          molestiae ipsa.
        </p>
        <p>
          Sedpellentesquesuscipitexsedconsequat.Fuscelobortistincidunteuismod.Etiamsollicitudinmolestiesemper.Donecmisem,molestieatmolestieid,posuereaclectus.Duismollis,maurisvenenatissagittisporta,quamvelitdictumdiam,nonaliquamnuncelitutex.
        </p>
      </MediaObjectLayout>
    ))
    .add("section 指定", () => (
      <MediaObjectLayout tag="section">
        <div>
          <img
            src="mock/images/img01.jpg"
            width="192"
            height="108"
            alt="MediaObjectLayout を説明するためのサンプル画像"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          dignissimos culpa minus tempore ea quam veniam, quas rerum praesentium
          quo! Dolores, cum eaque. Soluta possimus quae consequuntur provident
          molestiae ipsa.
        </p>
        <p>
          Sedpellentesquesuscipitexsedconsequat.Fuscelobortistincidunteuismod.Etiamsollicitudinmolestiesemper.Donecmisem,molestieatmolestieid,posuereaclectus.Duismollis,maurisvenenatissagittisporta,quamvelitdictumdiam,nonaliquamnuncelitutex.
        </p>
      </MediaObjectLayout>
    ));
