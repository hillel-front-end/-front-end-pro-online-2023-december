// -------- useEffect -----
// https://api.escuelajs.co/api/v1'


import {ChangeEvent, useEffect, useRef, useState} from "react";


// const useState = <T,> (initial: T) => {
//     console.log(initial);
// };
//
// interface Person {
//     name: string;
//     lastName: string;
//     age: number;
// }
//
//
// useState<string>('1');
// useState<Person>({
//     name: '1',
//     lastName: 'a',
//     age: 2
// });

// https://habr.com/ru/articles/711686/

// ------ Type --------
interface Product {
    "id": number
    "title": string,
    "price": number,
    "description": string,
    "category": {
        "id": number,
        "name": string,
        "image": string
    }
    "images": string[]
}

type InputEvent = ChangeEvent<HTMLInputElement>


// ----- End Type ------


const buildURL = (baseURL: string) => (path: string) => (
    `${baseURL}/${path}`
);

const apiEscuelajs = buildURL('https://api.escuelajs.co/api/v1');

// let someValue = '';

const ExampleUseEffect = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [title, setTitle] = useState<string>("");
    const refValue = useRef<string>('null');
    // const product: Partial<Product> = {}
    const refInput = useRef<HTMLInputElement>(null);
    // console.log(refInput.current.value)


    const fetchProducts = async () => {
        const products: Product[] = await (await fetch(apiEscuelajs(`products?offset=0&limit=10&title=${title}`))).json();
        // console.log(products, 'products');
        setProducts(products);
    };


    // 1. mounted
    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    //2. mounted + update
    // useEffect(() => {
    //     console.log('--call use effect---');
    //     fetchProducts();
    // }, [title]);


    //3. unmounted

    // useEffect(() => {
    //     console.log('--call use effect---');
    //     // fetchProducts();
    //     // const interval = setInterval(() => {
    //     //     console.log('---tik iterval---')
    //     // }, 3000)
    //
    //     return () => {
    //         // clearInterval(interval);
    //         console.log('--call cleanup or unmounted--');
    //     }
    // }, [title]);

    //4. throttle

    useEffect(() => {
        const timeout = setTimeout(() => {
            fetchProducts();
        }, 500)
        return () => {
            clearTimeout(timeout);
        }
    }, [title]);


    // ------ useRef -------



    // const onChangeHandler = (event: InputEvent) => {
    //     setTitle(event.target.value);
    // };

    const onClickHandler = () => {
        // console.log();
        // setTitle(refInput.current.value)
        // refValue.current  = refInput.current.value;
    }


    console.log(products, 'products');

    return (
        <div className="use-effect">
            <div>
                <label>
                    Input product title
                    <input ref={refInput}  />
                    <button onClick={onClickHandler}>click</button>
                </label>
                {title}
            </div>
            <pre>
                {JSON.stringify(products, null, 2)}
            </pre>
        </div>
    )
};

export default ExampleUseEffect;


/* ------ useEffect ------
    use-case: 1

    useEffect(() => {})

    use-case: 2 --> mounted

    useEffect(() => {}, [])

    use-case: 3 --> mounted + updated
    useEffect(() => {}, [dep1, ..., depN])
 */