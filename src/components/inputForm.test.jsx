/**
 * Skenario test component inputForm
 * 
 * - harus menangani pengetikan input String dengan benar
 * - harus menangani pengetikan input Password dengan benar
 * 
 */

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import matchers from '@testing-library/jest-dom/matchers';
import { InputTypeText, InputTypePassword } from "./inputForm";

expect.extend(matchers);

describe('Skenario test component inputForm', () => {
    it('harus menangani pengetikan input String dengan benar', async () => {
        render(<InputTypeText value="textTest" setValue={() => {}} placeHolder="textPlaceholder"/>);

        const textInput = await screen.getByPlaceholderText('textPlaceholder');

        expect(textInput).toHaveValue('textTest');
    })

    it('harus menangani pengetikan input Password dengan benar', async () => {
        render(<InputTypePassword value="passwordTest" setValue={() => {}} placeHolder="passwordPlaceholder"/>);

        const textInput = await screen.getByPlaceholderText('passwordPlaceholder');

        expect(textInput).toHaveValue('passwordTest');
    })
});
